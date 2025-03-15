using System.ComponentModel.DataAnnotations;

namespace Guesto.Core.Model
{
    public class Room : BaseEntity
    {
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;
        [StringLength(100)]
        public string RoomNo { get; set; } = string.Empty;
        public short Adults { get; set; }
        public short Children { get; set; }
        public bool Active { get; set; }
    }
}
