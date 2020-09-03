using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MySecondWebApplication.ViewModels
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
    public class SendToken
    { 
        public string Token { get; set; }
    }
    public class LoginUser { 
    public string Email { get; set; }
    public string Password { get; set; }
    }
}
