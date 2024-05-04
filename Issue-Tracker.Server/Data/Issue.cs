public class Issue {
    
    public int IssueId { get; set; }
    public string? IssueName { get; set; }
    public string? Description { get; set; }
    public string? Department { get; set; }
    public Status? Status { get; set; }
    public DateTime DateWorking { get; set; }
    public bool Active { get; set; }
}