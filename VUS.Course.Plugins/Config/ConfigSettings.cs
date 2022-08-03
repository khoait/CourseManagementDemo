using System.Runtime.Serialization;
using System.Xml.Serialization;

namespace VUS.Course.Plugins.Config
{
    [XmlType(AnonymousType = true)]
    [XmlRoot(Namespace = "", IsNullable = false)]
    [DataContract]
    public class ConfigSetting
    {
        [XmlElement("name")]
        [DataMember]
        public string Name { get; set; }

        [XmlElement("value")]
        [DataMember]
        public string Value { get; set; }
    }
}
