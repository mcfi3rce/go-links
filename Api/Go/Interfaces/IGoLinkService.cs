namespace GoLinks.Api;

public interface IGoLinkService
{
   public string GetUrlByName(string url);
   public List<GoLink> GetAllUrls();
   public bool CreateGoLink(GoLink goLink);
}