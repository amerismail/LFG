using System;

namespace LFG.Model
{
    public class Activity
    {
        public Activity()
        {
            CreateTS = DateTime.Now;
        }

        public int Id { get; private set; }
        public int ConsoleId { get; set; }
        public string Game { get; set; }
        public string Name { get; set; }
        public bool Mic { get; set; }
        public string Owner { get; set; }
        public DateTime CreateTS { get; set; }

        public virtual GameSystem GameSystem { get; set; }
    }
}
