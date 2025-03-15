namespace Guesto.Core.Model
{
    public class Room : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public string RoomNo { get; set; } = string.Empty;
        public short Adults { get; set; }
        public short Children { get; set; }
        public bool Active { get; set; }
    }
}
