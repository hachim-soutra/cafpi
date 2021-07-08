<template>
  <footer class="Footer">
    <div class="Footer__container">
      <div class="row m-0 p-0">
        <div class="FooterNavigation col-md-3">
          <h4 class="FooterNavigation__title">Liens Utiles</h4>
          <ul class="FooterNavigation__links">
            <li class="FooterNavigation__link">
              <a
                class="Link Nav__itemTextLink"
                href="demande-pret-immobilier.html"
                >Demande de Prêt</a
              >
            </li>
            <li class="FooterNavigation__link">
              <a
                class="Link Nav__itemTextLink"
                href="credit-immobilier-mensualites.html"
                >Simulation</a
              >
            </li>
            <li class="FooterNavigation__link">
              <a class="Link Nav__itemTextLink" href="presse.html">Presse</a>
            </li>
            <li class="FooterNavigation__link">
              <a class="Link Nav__itemTextLink" href="videotheque.html"
                >Vidéothèque</a
              >
            </li>
          </ul>
        </div>
        <div class="FooterNavigation col-md-3">
          <h4 class="FooterNavigation__title">&nbsp;</h4>
          <ul class="FooterNavigation__links">
            <li class="FooterNavigation__link">
              <a class="Link Nav__itemTextLink" href="recrutement.html"
                >Recrutement</a
              >
            </li>
            <li class="FooterNavigation__link">
              <a class="Link Nav__itemTextLink" href="parrainez-un-proche.html"
                >Parrainez un proche</a
              >
            </li>
            <li class="FooterNavigation__link">
              <a class="Link Nav__itemTextLink" href="temoignages.html"
                >Témoignages</a
              >
            </li>
            <li class="FooterNavigation__link">
              <a href="agences-cafpi-maroc.html" title="Careers"
                >Agences Cafpi</a
              >
            </li>
          </ul>
        </div>
        <div class="FooterNavigation col-md-3">
          <h4 class="FooterNavigation__title">&nbsp;</h4>
          <ul class="FooterNavigation__links">
            <li class="FooterNavigation__link">
              <a class="Link Nav__itemTextLink" href="notre-metier.html"
                >Notre métier</a
              >
            </li>
            <li class="FooterNavigation__link">
              <a class="Link Nav__itemTextLink" href="nos-engagements.html"
                >Les engagements CAFPI</a
              >
            </li>
            <li class="FooterNavigation__link">
              <a class="Link Nav__itemTextLink" href="nos-services.html"
                >Nos services</a
              >
            </li>
            <li class="FooterNavigation__link">
              <a href="taux-interet.html" title="Careers">Les taux</a>
            </li>
          </ul>
        </div>
        <div class="FooterNavigation col-md-3">
          <h4 class="FooterNavigation__title">&nbsp;</h4>
          <ul class="FooterNavigation__links">
            <li class="FooterNavigation__link">
              <a class="Link Nav__itemTextLink" href="qui-sommes-nous.html"
                >Qui Sommes-nous?</a
              >
            </li>
            <li class="FooterNavigation__link">
              <a class="Link Nav__itemTextLink" href="groupe-cafpi.html"
                >Le Groupe CAFPI</a
              >
            </li>
            <li class="FooterNavigation__link">
              <a
                class="Link Nav__itemTextLink"
                href="rechercher-un-bien-immobilier.html"
                >Le guide de l'achat immobilier</a
              >
            </li>
            <li class="FooterNavigation__link">
              <a class="Link Nav__itemTextLink" href="types-de-pret.html"
                >Nos Offres</a
              >
            </li>
          </ul>
        </div>

        <div class="FooterNavigation footer-social col-md-3">
          <h4 class="FooterNavigation__title">Réseaux Sociaux</h4>
          <ul class="FooterNavigation__links FooterNavigation__links_social">
            <li class="FooterNavigation__link FooterNavigation__Linkfacebook">
              <a
                href="https://www.facebook.com/cafpimaroc/"
                target="_blank"
                title="Facebook"
                >Facebook</a
              >
            </li>
            <li class="FooterNavigation__link FooterNavigation__Linklinkedin">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/cafpi-n1-des-courtiers-en-prêts-immobiliers-au-maroc-et-en-france"
                title="LinkedIn"
                >LinkedIn</a
              >
            </li>
            <li class="dev-par">
              Développé par
              <a
                title="Octonet - Agence digitale au Maroc"
                href="https://www.octonet.ma"
                target="_blank"
                class="whitelink"
                >Octonet</a
              >
            </li>
          </ul>
        </div>
        <div class="FooterNavigation Footer__address col-md-9 px-md-2 pt-md-5 ">
          <img
            src="https://www.cafpimaroc.com/images/favicon-32x32.png"
            alt=""
          />
          <p class="Footer__registration p-3">
            Créé en France en 1970, CAFPI s'est rapidement imposée comme le N°1
            des courtiers en prêts immobiliers. En 10 ans d'existence sur le
            marché marocain, CAFPI se charge d'étudier les meilleures offres
            bancaires, et propose aux particuliers un crédit immobilier 'sur
            mesure' à&nbsp; des conditions optimales
          </p>
        </div>
      </div>
    </div>

    <!--  -->
  </footer>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Footer {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  margin-top: 40px;
  .Footer__container {
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    margin: auto;
    max-width: 85%;
    padding: 40px 20px;
    .FooterNavigation__link a:active,
    .FooterNavigation__link a:link,
    .FooterNavigation__link a:visited {
      color: #fff;
      text-decoration: none;
      transition: color 250ms;
    }
    .Footer a,
    .Footer h1 {
      color: #fff;
    }
    .FooterNavigation__link a {
      font-size: 14px;
    }
    p {
      color: #fff;
      font-size: 12px;
    }
    .Footer__address{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
