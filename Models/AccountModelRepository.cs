using MySecondWebApplication.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MySecondWebApplication.Models
{
    public class AccountModelRepository : IAccountModel
    {
        private readonly AppDbContext _context;

        public AccountModelRepository(AppDbContext context)
        {
            _context = context;
        }
        public bool AddUser(AccountModel user)
        {
            try {
                _context.accounts.Add(user);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex) {
                Console.WriteLine(ex.Message);
                return false;
            }
           
        }

        public UserViewModel GetUser(string email, string password)
        {
            try
            {
                var res = _context.accounts.Where(s =>(s.Email == email && s.Password == password))
                           .FirstOrDefault();
                if (res != null) {
                    UserViewModel user = new UserViewModel();
                    user.Email = res.Email;
                    user.Name = res.Name;
                    user.Id = res.Id;
                    return user;
                }
                return null;
            }
            catch (Exception ex) {
                Console.WriteLine(ex.Message);
                return null;
            }
            
        }
        IEnumerable<AccountModel> IAccountModel.GetUsers()
        {
            throw new NotImplementedException();
        }
    }
}
