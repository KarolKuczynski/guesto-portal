namespace Guesto.Core.Requests
{
    public class CreateRoom
    {
        public string Name { get; set; } = string.Empty;
        public string RoomNo { get; set; } = string.Empty;
        public short Adults { get; set; }
        public short Children { get; set; }
    }
}
