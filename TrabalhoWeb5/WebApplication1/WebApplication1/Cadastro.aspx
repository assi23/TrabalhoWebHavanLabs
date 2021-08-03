<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Cadastro.aspx.cs" Inherits="WebApplication1.Cadastro" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
	<link href="Content/css/cadastro.css" rel="stylesheet" />
</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
	<div id="cadastro">
        <div id="form">
            <label for="marca">Marca:</label> <input type="text" name="marca" id="marca"> <br><br>
            <label for="Tipo">Tipo:</label> <input type="text" name="tipo" id="tipo">     <br><br>
            <label for="distri">Distribuidora:</label> <input type="text" name="distri" id="distri"> <br><br> 
            <button onclick="salvar();">Cadastrar</button>
        </div>
    </div>
</asp:Content>
