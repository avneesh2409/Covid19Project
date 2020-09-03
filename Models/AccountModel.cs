using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MySecondWebApplication.Models
{
    public class AccountModel
    {
        private int _id;
        private string _name;
        private string _email;
        private string _password;
        private string _contact;
        private string _createdOn;
        private string _createdBy;
        private string _modifiedBy;
        private string _modifiedOn;
        private bool _isActive;
        public int Id { get => _id; set => _id = value; }
        [Required]
        public string Email { get => _email; set => _email = value; }
        [Required]
        public string Password { get => _password; set => _password = value; }
        [Required]
        public string Name { get => _name; set => _name = value; }
        public string Contact { get => _contact; set => _contact = value; }

        public string CreatedOn { get => _createdOn; set => _createdOn = value; }

        public string CreatedBy { get => _createdBy; set => _createdBy = value; }

        public string ModifiedOn { get => _modifiedOn; set => _modifiedOn = value; }

        public string ModifiedBy { get => _modifiedBy; set => _modifiedBy = value; }

        public bool isActive { get => _isActive; set => _isActive = value; }

        public RoleModel Role { get; set; }
        [ForeignKey("Role")]
        public int RoleId { get; set; }
    }
}
