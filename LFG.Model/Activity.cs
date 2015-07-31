using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LFG.Model
{
    public class Activity
    {
        public Activity()
        {
            CreateTS = DateTime.Now;
        }

        public int Id { get; private set; }
        public string Name { get; set; }
        public int ConsoleId { get; set; }
        public DateTime CreateTS { get; set; }

        public virtual GameSystem GameSystem { get; set; }
    }
}
