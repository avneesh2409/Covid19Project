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
            user.CreatedBy = user.Name;
            user.Password = EncodePasswordToBase64(user.Password);
            user.CreatedOn = user.CreatedOn ?? DateTime.Now.ToString();
            user.ModifiedBy = user.Name;
            user.ModifiedOn = user.ModifiedOn ?? DateTime.Now.ToString();

            try
            {
                _context.accounts.Add(user);
                _context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }

        }

        public UserViewModel GetUser(string email, string password)
        {
            try
            {
                var res = _context.accounts.Where(s => (s.Email == email && s.Password == EncodePasswordToBase64(password)))
                           .FirstOrDefault();
                if (res != null)
                {
                    UserViewModel user = new UserViewModel();
                    user.Email = res.Email;
                    user.Name = res.Name;
                    user.Id = res.Id;
                    return user;
                }
                return null;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }

        }
        public static string EncodePasswordToBase64(string password)
        {
            try
            {
                byte[] encData_byte = new byte[password.Length];
                encData_byte = System.Text.Encoding.UTF8.GetBytes(password);
                string encodedData = Convert.ToBase64String(encData_byte);
                return encodedData;
            }
            catch (Exception ex)
            {
                throw new Exception("Error in base64Encode" + ex.Message);
            }
        }
        public static string DecodeFrom64(string encodedData)
        {
            System.Text.UTF8Encoding encoder = new System.Text.UTF8Encoding();
            System.Text.Decoder utf8Decode = encoder.GetDecoder();
            byte[] todecode_byte = Convert.FromBase64String(encodedData);
            int charCount = utf8Decode.GetCharCount(todecode_byte, 0, todecode_byte.Length);
            char[] decoded_char = new char[charCount];
            utf8Decode.GetChars(todecode_byte, 0, todecode_byte.Length, decoded_char, 0);
            string result = new String(decoded_char);
            return result;
        }
        IEnumerable<AccountModel> IAccountModel.GetUsers()
        {
            throw new NotImplementedException();
        }
    }
}
