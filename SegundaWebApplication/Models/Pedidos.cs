//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SegundaWebApplication.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Pedidos
    {
        public int id { get; set; }
        public string usuario { get; set; }
        public string cliente { get; set; }
        public Nullable<System.DateTime> fecha { get; set; }
        public string estado { get; set; }
        public Nullable<double> total { get; set; }
    }
}
