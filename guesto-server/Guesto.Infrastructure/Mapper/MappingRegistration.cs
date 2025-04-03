using Microsoft.Extensions.DependencyInjection;

namespace Guesto.Infrastructure.Mapper
{
    public static class MappingRegistration
    {
        public static void RegisterMappings(this IServiceCollection collection)
        {
            collection.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        }
    }
}
