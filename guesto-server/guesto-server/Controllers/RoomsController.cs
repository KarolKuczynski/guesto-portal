using Guesto.Core.Interfaces;
using Guesto.Core.Interfaces.Serivces;
using Guesto.Core.Requests;
using Microsoft.AspNetCore.Mvc;

namespace guesto_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomsController : ControllerBase
    {
        private readonly IRoomService _roomService;

        public RoomsController(IRoomService roomService)
        {
            _roomService = roomService;
        }

        [HttpGet()]
        public bool Get()
        {
            

            return true;
        }

        [HttpPost()]
        public async Task<IActionResult> CreateRoom([FromBody] CreateRoom request)
        {
            var id =  await _roomService.AddRoomAsync(request);
            return Ok(id);
        }
    }
}
