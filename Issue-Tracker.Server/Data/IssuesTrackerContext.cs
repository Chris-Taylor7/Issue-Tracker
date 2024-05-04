using Microsoft.EntityFrameworkCore;

public class IssueTrackerContext : DbContext
{
    public IssueTrackerContext (DbContextOptions<IssueTrackerContext> IssueTrackerContext ) : base(IssueTrackerContext )
    {
    }

    // Define your DbSet properties here
    public DbSet<Issue> Issues { get; set; }
}
