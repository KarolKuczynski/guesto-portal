using Guesto.Core.Requests;

namespace Guesto.Core.Interfaces.Serivces
{
    public interface IRoomService
    {
        Task<int> AddRoomAsync(CreateRoom model);
    }
}
