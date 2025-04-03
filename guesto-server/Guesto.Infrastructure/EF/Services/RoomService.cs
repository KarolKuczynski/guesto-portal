using AutoMapper;
using Guesto.Core.Interfaces.Serivces;
using Guesto.Core.Model;
using Guesto.Core.Requests;
using Guesto.Core.Responses;
using Microsoft.EntityFrameworkCore;

namespace Guesto.Infrastructure.EF.Services
{
    public class RoomService : IRoomService
    {
        private readonly EFContext _context;
        private readonly IMapper _mapper;

        public RoomService(EFContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<RoomDto>> GetRoomsAsync()
        {
            var rooms = await _context.Rooms.ToListAsync();

            return _mapper.Map<IEnumerable<RoomDto>>(rooms);
        }

        public async Task<int> AddRoomAsync(CreateRoom model)
        {
            var room = new Room()
            {
                Name = model.Name,
                RoomNo = model.RoomNo,
                Children = model.Children,
                Adults = model.Adults,
                Active = true
            };

            _context.Add(room);

            await _context.SaveChangesAsync();
           
            return room.Id;
        }

        
    }
}
