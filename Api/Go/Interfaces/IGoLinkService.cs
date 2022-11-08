namespace GoLinks.Api;

public interface IGoLinkService
{
   public GoLink? GetUrlByName(string url);
   public List<GoLink> GetAllUrls();
   public bool CreateGoLink(GoLink goLink);
   public bool DeleteGoLink(GoLink goLink);
}