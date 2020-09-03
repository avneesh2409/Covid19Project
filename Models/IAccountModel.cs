using MySecondWebApplication.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MySecondWebApplication.Models
{
    public interface IAccountModel
    {
        IEnumerable<AccountModel> GetUsers();
        bool AddUser(AccountModel user);
        UserViewModel GetUser(string email, string password);
    }
}
