using Guesto.Core.Requests;
using Guesto.Core.Responses;

namespace Guesto.Core.Interfaces.Serivces
{
    public interface IRoomService
    {
        Task<IEnumerable<RoomDto>> GetRoomsAsync();

        Task<int> AddRoomAsync(CreateRoom model);


    }
}
