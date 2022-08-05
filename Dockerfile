FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM node:latest AS node_base
RUN echo "NODE Version:" && node --version
RUN echo "NPM Version:" && npm --version

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
COPY --from=node_base . .
WORKDIR /src
COPY ["go-links.csproj", "./"]
RUN dotnet restore "go-links.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "go-links.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "go-links.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "go-links.dll"]
