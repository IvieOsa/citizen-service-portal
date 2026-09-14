using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServicePortal.Api.Data;
using ServicePortal.Api.Models;

namespace ServicePortal.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RequestsController : ControllerBase
{
    private readonly PortalContext _context;

    public RequestsController(PortalContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ServiceRequest>>> GetRequests()
    {
return await _context.ServiceRequests.OrderByDescending(r => r.CreatedAt).ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ServiceRequest>> GetById(Guid id)
    {
        var request = await _context.ServiceRequests.FindAsync(id);
        if (request == null)return NotFound();
        return request;
    }

    [HttpPost]
    public async Task<ActionResult<ServiceRequest>> Create(ServiceRequest request)
    {
        _context.ServiceRequests.Add(request);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = request.Id }, request);
    }

    [HttpPatch("{id}/status")]
    public async Task<IActionResult> Update(Guid id, [FromBody]string status)
    {
        var request = await _context.ServiceRequests.FindAsync(id);
        if (request == null)return NotFound();
        request.Status = status;
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
   