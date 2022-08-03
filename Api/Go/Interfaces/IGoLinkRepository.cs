namespace GoLinks.Api;

public interface IGoLinkRepository
{
   public GoLink FindGoLinkBySource(string source);
   public List<GoLink> FindAll();
   public bool InsertGoLink(GoLink goLink);
   public void DeleteGoLinkBySource(string userName, string source);
   public GoLink UpdateGoLink(string userName, string source);
   public GoLink TakeOwnershipOfGoLink(string username, string source);
}