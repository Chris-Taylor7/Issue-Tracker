using Microsoft.EntityFrameworkCore;

public class IssueTrackerContext : DbContext
{
    public IssueTrackerContext(DbContextOptions<IssueTrackerContext> options) : base(options)
    {
        // Your constructor logic here
    }

    // Define your DbSet properties here
    public DbSet<Issue> Issues { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Issue>()
            .HasKey(e => e.IssueId); // Set IssueId as the primary key

        modelBuilder.Entity<Issue>()
            .Property(e => e.IssueId)
            .ValueGeneratedOnAdd(); // Set IssueId to be auto-generated when adding new issues

        base.OnModelCreating(modelBuilder);
    }
}
