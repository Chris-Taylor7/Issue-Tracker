using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Issue_Tracker.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IssueController : ControllerBase
    {
        private readonly IssueTrackerContext _context;

        public IssueController(IssueTrackerContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IQueryable<Issue> GetIssues()
        {
            return _context.Issues.Where(a => a.Active == true);
        }

        [HttpPost]
        public IActionResult CreateOrUpdateIssue(int issueId, bool active, DateTime dateWorking, 
            string description, string department, string name, Status status)
        {
            // Check if the issueId is 0 or not to determine if it's a new issue or an existing one
            if (issueId == 0)
            {
                // Creating a new issue
                _context.Add(new Issue
                {
                    Active = active,
                    DateWorking = dateWorking,
                    Description = description,
                    Department = department,
                    IssueName = name,
                    Status = status
                });
            }
            else
            {
                // Updating an existing issue
                var existingIssue = _context.Issues.FirstOrDefault(a => a.IssueId == issueId);

                if (existingIssue == null)
                {
                    return NotFound(); // Return 404 if the issue with the specified id is not found
                }

                // Update the properties of the existing issue
                existingIssue.Active = active;
                existingIssue.DateWorking = dateWorking;
                existingIssue.Description = description;
                existingIssue.Department = department;
                existingIssue.IssueName = name;
                existingIssue.Status = status;

                _context.Update(existingIssue);
            }

            // Save changes to the database
            _context.SaveChanges();

            return Ok(); // Return 200 OK indicating success
        }
        [HttpGet]
        public void DeleteIssue(int issueId)
        {
            var issue = _context.Issues.FirstOrDefault(a => a.IssueId == issueId);
            
            if (issue == null)
            {
                return;       
            }
            
            issue.Active = false; 

            _context.SaveChanges();
        }
    }
}

