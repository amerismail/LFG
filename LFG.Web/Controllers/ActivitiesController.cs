﻿using LFG.Data;
using LFG.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LFG.Web.Controllers
{
    public abstract class ApiControllerBase : ApiController
    {
        protected LfgUow Uow {get; set;}
    }

    public class ActivitiesController : ApiControllerBase
    {
        public ActivitiesController()
        {
            Uow = new LfgUow();
        }
          
        // GET api/activity
        public IEnumerable<Activity> Get()
        {
            return Uow.Activities.GetAll().OrderByDescending(s => s.CreateTS);
        }

        public IEnumerable<Activity> Search(ActivitiesSearch activitiesSearch)
        {
            IEnumerable<Activity> result = Uow.Activities.GetAll().OrderByDescending(s => s.CreateTS);

            if (activitiesSearch != null)
            {
                if (!string.IsNullOrEmpty(activitiesSearch.Name))
                {
                    result = result.Where(t => t.Name.Contains(activitiesSearch.Name, StringComparison.OrdinalIgnoreCase));
                }

                if (activitiesSearch.ConsoleID != -1)
                {
                    result = result.Where(t => t.ConsoleId.Equals(activitiesSearch.ConsoleID));
                }

                if (activitiesSearch.Game != null)
                {
                    result = result.Where(t => t.Game.Contains(activitiesSearch.Game, StringComparison.OrdinalIgnoreCase));
                }

                if (activitiesSearch.Microphone)
                {
                    result = result.Where(t => t.Mic.Equals(activitiesSearch.Microphone));
                }
            }

            return result;
        }

        // GET api/activity/5
        public Activity Get(int id)
        {
            return Uow.Activities.GetById(id);
        }

        // POST api/activity
        public HttpResponseMessage Save(Activity activity)
        {
            Uow.Activities.Add(activity);
            Uow.Commit();

            var response = Request.CreateResponse(HttpStatusCode.Created, activity);
            response.Headers.Location = new Uri(Url.Link(RouteConfig.ControllerAndId, new { id = activity.Id }));

            return response;
        }

        // PUT api/activity/5
        public HttpResponseMessage Put(int id, [FromBody]string value)
        {
            // Uow.Activities.Update(...);

            var response = Request.CreateResponse(HttpStatusCode.NotImplemented);
            return response;
        }

        // DELETE api/activity/5
        public HttpResponseMessage Delete(int id)
        {
            Uow.Activities.Delete(id);
            Uow.Commit();

            var response = Request.CreateResponse(HttpStatusCode.OK);
            return response;
        }
    }
}
