using Guesto.Core.Model;
using Microsoft.EntityFrameworkCore;

namespace Guesto.Infrastructure.EF
{
    public class EFContext : DbContext
    {
        public DbSet<Room> Rooms { get; set; }

        public EFContext(DbContextOptions<EFContext> options) : base(options) { }
       
        
    }
}
