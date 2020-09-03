using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MySecondWebApplication.Models
{
    public class RoleModel
    {
            public int Id { get; set; }
            public string Role { get; set; }
            public ICollection<AccountModel> Accounts { get; set; }
    }
}
