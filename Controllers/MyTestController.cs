using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using MySecondWebApplication.Models;
using MySecondWebApplication.ViewModels;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MySecondWebApplication.Controllers
{
    [Authorize]
    [Route("api")]
    [ApiController]
    public class MyTestController : Controller
    {
        private readonly IAccountModel _userContext;
        private readonly IConfiguration _config;

        public MyTestController(IAccountModel userContext,IConfiguration config)
        {
            _userContext = userContext;
            _config = config;
        }

        #region User
        [AllowAnonymous]
        [HttpPost]
        [Route("register")]
        public bool RegisterUser([FromBody] AccountModel user)
        {
            bool res = _userContext.AddUser(user);
            return res;
        }
        [AllowAnonymous]
        [HttpPost]
        [Route("login")]
        public ObjectResult Login([FromBody] LoginUser user)
        {
            var result = Authenticate(user);
            if (result != null)
            {
                return new ObjectResult(result);
            }
            return null;
        }

        public SendToken Authenticate(LoginUser user)
        {
            var result = _userContext.GetUser(user.Email, user.Password);
            if (result == null) return null;
            string token = generateJwtToken(result);

            return new SendToken{ 
                Token=token
            };
        }

        private string generateJwtToken(UserViewModel user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_config["Jwt:Secret"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddMinutes(60),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }



        #endregion
    }
}
