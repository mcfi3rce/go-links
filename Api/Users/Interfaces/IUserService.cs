using GoLinks.Api.Users;

namespace GoLinks.Api;

public interface IUserService
{
   public List<User> GetUsers();
   public User GetUserByUsername(string username);
   public void CreateUser(User user);
   public void DeleteUserByUsername(string username);
   
}