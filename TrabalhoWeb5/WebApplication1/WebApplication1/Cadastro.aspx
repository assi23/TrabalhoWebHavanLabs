<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Cadastro.aspx.cs" Inherits="WebApplication1.Cadastro" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
	<link href="Content/css/cadastro.css" rel="stylesheet" />
</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
	<div id="cadastro">
		<div id="form">
			<h3 id="h3">Cadastro Cerveja</h3>
			<label for="tbMarca">Marca:</label>
			<asp:TextBox ID="tbMarca" runat="server" CssClass="form"></asp:TextBox>
			<label for="tbTipo">Tipo:</label>
			<asp:TextBox ID="tbTipo" runat="server"  CssClass="form"></asp:TextBox>
			<label for="tbDistri">Distribuidora:</label>
			<asp:TextBox ID="tbDistri" runat="server"  CssClass="form"></asp:TextBox>
			<asp:Button  ID="btnSalvar" runat="server" Text="Button" OnClick="btnSalvar_Click" CssClass="botao"/>
			<asp:Label ID="lbMessage" runat="server" Text="" CssClass="label"></asp:Label>
		</div>
	</div>
</asp:Content>
