using System.Web.Optimization;

namespace LFG.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/app.css", 
                "~/Content/loader.css"));

            bundles.Add(new ScriptBundle("~/bundles/index").Include(
                "~/Scripts/lib/jquery-2.1.4.min.js",
                "~/Scripts/lib/knockout-3.3.0.js",
                "~/Scripts/lib/sammy-0.7.5.min.js",
                "~/Scripts/router.js",
                "~/Content/bootstrap-3.3.5/js/bootstrap.min.js",
                "~/Scripts/app/navbar.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/home").Include(
                "~/Scripts/lib/jquery.tablesorter.min.js",
                "~/Scripts/app/tableSorter.js",
                "~/Scripts/app/list_activities.js",
                "~/Scripts/app/vm.search.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/createActivity").Include(
                "~/Scripts/app/vm.activity.js"
                ));

           BundleTable.EnableOptimizations = true;
        }
    }
}