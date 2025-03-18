using Guesto.Core.Interfaces;
using Guesto.Core.Interfaces.Serivces;
using Guesto.Infrastructure.EF.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Guesto.Infrastructure.EF
{
    public static class ServicesRegistration
    {
        public static void RegisterEFServices(this IServiceCollection collection, string? connectionString)
        {
            collection.AddDbContext<EFContext>(x => x.UseSqlServer(connectionString), ServiceLifetime.Scoped);
            collection.AddScoped<IRoomService, RoomService>();
        }
    }
}
