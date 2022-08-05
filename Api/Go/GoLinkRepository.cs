using System.Data;
using Dapper;
using Npgsql;

namespace GoLinks.Api;

public class GoLinkRepository : IGoLinkRepository
{
    private IDbConnection _db;

    public GoLinkRepository(IConfiguration configuration)
    {
        _db = new NpgsqlConnection(configuration["DatabaseSettings:ConnectionString"]);
    }
    
    public GoLink FindGoLinkBySource(string source)
    {
        return _db.QueryFirst<GoLink>("SELECT * FROM go_links WHERE source = @source", new { source});
    }

    public List<GoLink> FindAll()
    {
        return _db.Query<GoLink>("SELECT * FROM go_links").ToList();
    }

    public bool InsertGoLink(GoLink goLink)
    {
        var result = _db.Execute("INSERT INTO go_links VALUES (@source, @target, @user_name, @date_added)", goLink);
        return result > 0;
    }

    public bool DeleteGoLinkBySource(string userName, string source)
    {
        var result = _db.Execute("DELETE FROM go_links WHERE source = @source AND user_name = @userName",
            new { source, userName });
        return result > 0;
    }

    public GoLink UpdateGoLink(string userName, string source)
    {
        throw new NotImplementedException();
    }

    public GoLink TakeOwnershipOfGoLink(string username, string source)
    {
        throw new NotImplementedException();
    }
}