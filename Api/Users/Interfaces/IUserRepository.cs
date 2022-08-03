using GoLinks.Api.Users;

namespace GoLinks.Api;

public interface IUserRepository
{
    public User FindUserByUsername(string userName);
    public List<User> FindAllUsers();
    public User CreateUser(User user);
    public User UpdateUser(User user);
    public bool DeleteUserByUsername(string userName);
}
