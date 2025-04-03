namespace Guesto.Core.Responses
{
    public class RoomDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string RoomNo { get; set; } = string.Empty;
        public int Adults { get; set; }
        public int Children { get; set; }
        public bool Active { get; set; }
    }
}
