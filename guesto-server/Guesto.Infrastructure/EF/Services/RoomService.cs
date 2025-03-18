using Guesto.Core.Interfaces.Serivces;
using Guesto.Core.Model;
using Guesto.Core.Requests;

namespace Guesto.Infrastructure.EF.Services
{
    public class RoomService : IRoomService
    {
        private readonly EFContext _context;

        public RoomService(EFContext context)
        {
            _context = context;
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
