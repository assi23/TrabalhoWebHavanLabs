using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApplication1.Repository;

namespace WebApplication1
{
	public partial class Listar : System.Web.UI.Page
	{
		private CervejaRepository repository;
		protected void Page_Load(object sender, EventArgs e)
		{
			this.repository = new CervejaRepository();
			this.dgvCerveja.DataSource = repository.Read();
			this.dgvCerveja.DataBind();
		}
	}
}