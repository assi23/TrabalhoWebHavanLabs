using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1
{
	public partial class Cadastro : System.Web.UI.Page
	{
		private CervejaRepository repository;
		protected void Page_Load(object sender, EventArgs e)
		{
			this.repository = new CervejaRepository();
		}

		protected void btnSalvar_Click(object sender, EventArgs e)
		{
			Cerveja model = new Cerveja();
			model.Marca = this.tbMarca.Text;
			model.Tipo = this.tbTipo.Text;
			model.Distribuidora = this.tbDistri.Text;
			repository.Create(model);
			this.lbMessage.Text = "Salvo";
			this.LimparCad();
		}
		private void LimparCad()
		{
			this.tbMarca.Text = String.Empty;
			this.tbTipo.Text = String.Empty;
			this.tbDistri.Text = String.Empty;
		}
	}
}