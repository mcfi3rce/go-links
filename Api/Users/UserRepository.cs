using System.Data;
using Npgsql;

namespace GoLinks.Api.Users;

public class UserRepository : IUserRepository
{
    private IDbConnection _db;

    public UserRepository(IConfiguration configuration)
    {
        _db = new NpgsqlConnection(configuration["DatabaseSettings:ConnectionString"]);
    }


    public User FindUserByUsername(string userName)
    {
        throw new NotImplementedException();
    }

    public List<User> FindAllUsers()
    {
        throw new NotImplementedException();
    }

    public User CreateUser(User user)
    {
        throw new NotImplementedException();
    }

    public User UpdateUser(User user)
    {
        throw new NotImplementedException();
    }

    public bool DeleteUserByUsername(string userName)
    {
        throw new NotImplementedException();
    }
}