using AutoMapper;
using Guesto.Core.Model;
using Guesto.Core.Responses;

namespace Guesto.Infrastructure.Mapper.Mappings
{
    public class RoomProfile : Profile
    {
        public RoomProfile()
        {
            CreateMap<Room, RoomDto>();
        }
    }
}
