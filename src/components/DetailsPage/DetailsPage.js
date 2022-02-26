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
  DContGameComments,
  DGender,
  DPlat,
  DTitleH3,
  DDescription,
  DetailsBody
} from "./DetailsPage.elements";
import Footer from "../../components/Footer/Footer";
import { getGameDetails } from "../../services/Api.js";
import { useParams } from "react-router";
import GameComment from "../GameComment/GameComment";

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
      <DetailsBody>
        <DetailsContainer>
          <DContTitle>
            <DTitle>{game.title}</DTitle>
            <DGameRelease>{game.release_date}</DGameRelease>
          </DContTitle>
          <DContGameImage>********** IMAGEM AQUI *********</DContGameImage>
          <DContGenderPlat>
            <DGender>
              <DTitleH3>Genre:</DTitleH3> {game.genre}
            </DGender>
            <DPlat>
              <DTitleH3>Platform:</DTitleH3> {game.platform}
            </DPlat>
          </DContGenderPlat>
          <DContGameDescription>
            <DTitleH3>Description</DTitleH3>
            <DDescription>{game.description}</DDescription>
          </DContGameDescription>
          <DContGameRequirements></DContGameRequirements>
          <DContGameComments>
          <GameComment/>
          </DContGameComments>
        </DetailsContainer>
      </DetailsBody>
      <Footer />
    </>
  );
};

export default DetailsPage;
