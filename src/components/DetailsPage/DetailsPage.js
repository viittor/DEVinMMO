import React, { useEffect, useState } from "react";
import {
  DetailsContainer,
  DContTitle,
  DTitle,
  DGameRelease,
  DContGameImage,
  DContGenderPlat,
  DContGameDescription,
  DContGameRequirements,
  DContGameComents,
  DGender,
  DPlat,
  DTitleH3,
  DDescription
} from "./DetailsPage.elements";
import Footer from "../../components/Footer/Footer";
import { getGameDetails } from "../../services/Api.js";
import { useParams } from "react-router";

const DetailsPage = () => {
  const [game, setGame] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getGameDetails("game", id).then((data) => {
      setGame(data);
    });
  }, [id]);

  return (
    <>
      <DetailsContainer>
        <DContTitle>
          <DTitle>{game.title}</DTitle>
          <DGameRelease>{game.release_date}</DGameRelease>
        </DContTitle>
        <DContGameImage>********** IMAGEM AQUI *********</DContGameImage>
        <DContGenderPlat>
            <DGender><DTitleH3>Genre:</DTitleH3> {game.genre}</DGender>
            <DPlat><DTitleH3>Platform:</DTitleH3> {game.platform}</DPlat>
        </DContGenderPlat>
        <DContGameDescription>
<DTitleH3>Description</DTitleH3>
<DDescription>{game.description}</DDescription>
        </DContGameDescription>
        <DContGameRequirements></DContGameRequirements>
        <DContGameComents></DContGameComents>
      </DetailsContainer>
      <Footer />
    </>
  );
};

export default DetailsPage;
