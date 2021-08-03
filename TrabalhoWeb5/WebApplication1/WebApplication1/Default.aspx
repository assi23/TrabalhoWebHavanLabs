<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication1.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="Content/css/home.css" rel="stylesheet" />
	<link href="Content/css/header.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
	 <main>
        <div id="conteudo">
            <h3 id="h3">Nosso Espaço</h3>
            <div id="conteudo2">
                <iframe id="video2" width="560" height="315" src="https://www.youtube.com/embed/4kS9X5v1a8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </main>
</asp:Content>
