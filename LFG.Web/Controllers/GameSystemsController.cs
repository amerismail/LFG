using LFG.Data;
using LFG.Model;
using System.Collections.Generic;
using System.Linq;

namespace LFG.Web.Controllers
{
    public class GameSystemsController : ApiControllerBase
    {
        public GameSystemsController()
        {
            Uow = new LfgUow();
        }

        //GET api/gamesystems
        public IEnumerable<GameSystem> Get()
        {
            return Uow.GameSystems.GetAll().OrderBy(s => s.Name);
        }
    }
}