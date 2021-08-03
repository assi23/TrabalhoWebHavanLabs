<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Listar.aspx.cs" Inherits="WebApplication1.Listar" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
	<link href="Content/css/listar.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
	<h3 id="h3">Lista Cerveja</h3>
	<asp:GridView ID="dgvCerveja" runat="server" CssClass="tabela"></asp:GridView>
</asp:Content>
