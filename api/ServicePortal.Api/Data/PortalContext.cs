using Microsoft.EntityFrameworkCore;
using ServicePortal.Api.Models;

namespace ServicePortal.Api.Data;

public class PortalContext : DbContext
{
    public PortalContext(DbContextOptions<PortalContext> options) : base(options) { }

    public DbSet<ServiceRequest> ServiceRequests => Set<ServiceRequest>();
}