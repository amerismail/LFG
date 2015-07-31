using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LFG.Model
{
    public class GameSystem
    {
        public int Id { get; private set; }
        public string Name { get; set; }
    }
}
