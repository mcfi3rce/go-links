namespace GoLinks.Api;

public interface IGoLinkService
{
   public string GetUrlByName(string url);
   public List<GoLink> GetAllUrls();
}