namespace GoLinks.Api;

public interface IGoLinkRepository
{
   public GoLink FindGoLinkBySource(string source);
   public List<GoLink> FindAll();
   public GoLink InsertGoLink(string userName, string source, string target);
   public void DeleteGoLinkBySource(string userName, string source);
   public GoLink UpdateGoLink(string userName, string source);
   public GoLink TakeOwnershipOfGoLink(string username, string source);
}