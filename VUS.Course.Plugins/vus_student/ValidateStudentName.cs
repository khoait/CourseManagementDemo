using Microsoft.Xrm.Sdk;
using VUS.Course.Plugins.Common;
using VUS.Course.Shared.Services;

namespace VUS.Course.Plugins.vus_student
{
    [CrmPluginRegistration("Create",
    "vus_student", StageEnum.PreValidation, ExecutionModeEnum.Synchronous,
    "", "VUS.Course.Plugins.vus_student.ValidateStudentName: Create of vus_student", 1,
    IsolationModeEnum.Sandbox
    , Description = "VUS.Course.Plugins.vus_student.ValidateStudentName: Create of vus_student"
    , Id = "a6c1c0b3-5512-ed11-b83e-0022485adde6"
    , UnSecureConfiguration = @"""invalid student name. names must not contain test"""
    )]
    public class ValidateStudentName : PluginBase
    {
        public override string[] ValidMessageNames => new string[] { "Create", "Update" };

        public override void Execute(ILocalPluginContext context)
        {
            var target = context.GetInputParameter<Entity>("Target")?.ToEntity<Shared.vus_student>();

            if (target == null)
            {
                context.Trace("Target is null");
                return;
            }

            context.Trace("fullname: {0}", target.vus_fullname);
            context.Trace("firstname: {0}", target.vus_firstname);
            context.Trace("lastname: {0}", target.vus_lastname);

            var studentService = new StudentService(context.CurrentUserService);
            if (!studentService.ValidateStudentName(target))
            {
                context.Trace("Name contains test");
                var invalidMessage = this.UnsecureConfigString;
                throw new InvalidPluginExecutionException(OperationStatus.Failed, 1, invalidMessage ?? "invalid name");
            }
        }
    }
}
