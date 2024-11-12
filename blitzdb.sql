-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: blitzdb
-- Generation Time: Nov 12, 2024 at 10:54 PM
-- Server version: 11.5.2-MariaDB-ubu2404
-- PHP Version: 8.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `csci467`
--
CREATE DATABASE IF NOT EXISTS `csci467` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `csci467`;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  `contact` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `city`, `street`, `contact`) VALUES
(1, 'IBM Corporation', 'Armonk, NY', 'The IBM Way', '1-800-CALL-IBM'),
(2, 'Ege Consulting, Inc.', 'Miami, FL', '14531 SW 76 Street', 'www.ege.com'),
(3, 'Alcatel - Lucent', 'Holmdel, NJ', '100 Crawfords Corner Road', 'www.lucent.com'),
(4, 'Insight Technologies Group', 'St. Louis, MO', 'Hollenberg Drive West, Suite 203', 'info@insight-tech.com'),
(5, 'Rational Software Corporation', 'Santa Clara, CA', 'Better than ARGO way', 'www.rational.com'),
(6, 'Bell South', 'Atlanta, GA', 'Braves Parkway', '1-305-970-BELL'),
(7, 'GE Corporation', 'New York, NY', '100 Wall Street', 'John Myers @ 1-202-452-8864'),
(8, 'Comcast - NBC', 'New York, NY', 'Katy and Matt Plaza', 'www.nbc.COMCAST.com'),
(9, 'Ralston Purina', 'Armadillo, TX', '12123 Dog Lane', 'Susan Powers @ 1-614-556-4266'),
(10, 'John Deere Corporation', 'West Lafayette, IN', 'One Greenway', 'www.johndeere.com'),
(11, 'Hilti GMBH & Co, KG', 'Zurich, Switzerland', 'Tobelstrasse 14', '+39-89787-562636'),
(12, 'Kress und Soehne', 'Hechingen, Germany', 'Industriegebiet', '+49-711-246012'),
(13, 'GemStone Corporation', 'Beaverton, OR', 'John von Neumann Drive', 'ally McBeal @ www.gemstone.com'),
(14, 'The Maibaum Coalition', 'Crepe Sushette, Greece', 'near Athens', 'mai.baum.gr'),
(15, 'Grabby Grubby Meast', 'Burlington, IL', '123 Water Tower Circle', 'meat.grub.com'),
(16, 'Mast und Schotbruch', 'Hamburg, Germany', '1776 Ronald McDonald Allee', 'www.ham.burg.de'),
(17, 'Golden Seventeen Corporation', 'Chicago, IL', 'North Bayshore Drive', '17@18.net'),
(18, 'South by Southwest', 'Austin, TX', '100 SquareMile Road', '1-800-sxs-west'),
(19, 'Diamonds are Forever', 'Kapstadt, South Africa', 'allover there', 'dia@south.africa.net'),
(20, 'Diamond Corporation', 'Hillsboro, OR', 'Wacker Drive', 'ceo@dia.com'),
(21, 'Excelsior Mutants', 'Vancouver, WA', '1 Columbia Circle', 'van@celsius.net'),
(22, 'Clever Building & Co.', 'Seattle, WA', 'Evergreen Parkview, stall #2', 'clever@huland.net'),
(23, 'Reams Paper and Sausage', 'Elburn, IL', 'IL Rt. 47', 'hackebeil@reams.tv'),
(24, 'Rivabeck Industrial Solutions', 'Sycamore, IL', '5566 Moore Ct', '1-815-riv-beck'),
(25, 'Asus Tech', 'Taiwan, TW', 'EllisWay Thoroughfare', 'asus.tw'),
(26, 'Hongkong Travel Ltd.', 'Hongkong', 'Sang Pang Wang', 'hong.kong'),
(27, 'Clowncar Development Subsidiaries', 'DesMoines, IA', '1492 West Far Out Blvd', 'clown.car.tv'),
(28, 'Big and Lovely Partnership', 'Salt Lake City, UT', 'smack in the middle', 'www.big.love.com'),
(30, 'United we Parcel ', 'Gremlin, FL', '1 Ocean Drive', 'united@ocean.com'),
(33, 'Disgruntled Customer: 24-11-12 16:54', 'Dekalb, IL', 'PM 51', 'www.niu.edu'),
(40, 'Atelier graphique', 'Nantes, France', '54, rue Royale', '40.32.2555'),
(41, 'Signal Gift Stores', 'Las Vegas, NV', '8489 Strong St.', '7025551838'),
(42, 'Australian Collectors, Co.', 'Melbourne, Australia', '636 St Kilda Road', '03 9520 4555'),
(43, 'La Rochelle Gifts', 'Nantes, France', '67, rue des Cinquante Otages', '40.67.8555'),
(44, 'Baane Mini Imports', 'Stavern, Norway', 'Erling Skakkes gate 78', '07-98 9555'),
(45, 'Mini Gifts Distributors Ltd.', 'San Rafael, CA', '5677 Strong St.', '4155551450'),
(46, 'Havel & Zbyszek Co', 'Warszawa, Poland', 'ul. Filtrowa 68', '(26) 642-7555'),
(47, 'Blauer See Auto, Co.', 'Frankfurt, Germany', 'Lyonerstr. 34', '+49 69 66 90 2555'),
(48, 'Mini Wheels Co.', 'San Francisco, CA', '5557 North Pendale Street', '6505555787'),
(49, 'Land of Toys Inc.', 'NYC, NY', '897 Long Airport Avenue', '2125557818'),
(50, 'Euro+ Shopping Channel', 'Madrid, Spain', 'C/ Moralzarzal, 86', '(91) 555 94 44'),
(51, 'Volvo Model Replicas, Co', 'Luleå, Sweden', 'Berguvsvägen  8', '0921-12 3555'),
(52, 'Danish Wholesale Imports', 'Kobenhavn, Denmark', 'Vinbæltet 34', '31 12 3555'),
(53, 'Saveley & Henriot, Co.', 'Lyon, France', '2, rue du Commerce', '78.32.5555'),
(54, 'Dragon Souveniers, Ltd.', 'Singapore, Singapore', 'Bronz Sok.', '+65 221 7555'),
(55, 'Muscle Machine Inc', 'NYC, NY', '4092 Furth Circle', '2125557413'),
(56, 'Diecast Classics Inc.', 'Allentown, PA', '7586 Pompton St.', '2155551555'),
(57, 'Technics Stores Inc.', 'Burlingame, CA', '9408 Furth Circle', '6505556809'),
(58, 'Handji Gifts& Co', 'Singapore, Singapore', '106 Linden Road Sandown', '+65 224 1555'),
(59, 'Herkku Gifts', 'Bergen, Norway  ', 'Brehmen St. 121', '+47 2267 3215'),
(60, 'American Souvenirs Inc', 'New Haven, CT', '149 Spinnaker Dr.', '2035557845'),
(61, 'Porto Imports Co.', 'Lisboa, Portugal', 'Estrada da saúde n. 58', '(1) 356-5555'),
(62, 'Daedalus Designs Imports', 'Lille, France', '184, chaussée de Tournai', '20.16.1555'),
(63, 'La Corne D\'abondance, Co.', 'Paris, France', '265, boulevard Charonne', '(1) 42.34.2555'),
(64, 'Cambridge Collectables Co.', 'Cambridge, MA', '4658 Baden Av.', '6175555555'),
(65, 'Gift Depot Inc.', 'Bridgewater, CT', '25593 South Bay Ln.', '2035552570'),
(66, 'Osaka Souveniers Co.', 'Kita-ku, Japan', '1-6-20 Dojima', '+81 06 6342 5555'),
(67, 'Vitachrome Inc.', 'NYC, NY', '2678 Kingston Rd.', '2125551500'),
(68, 'Toys of Finland, Co.', 'Helsinki, Finland', 'Keskuskatu 45', '90-224 8555'),
(69, 'AV Stores, Co.', 'Manchester, UK', 'Fauntleroy Circus', '(171) 555-1555'),
(70, 'Clover Collections, Co.', 'Dublin, Ireland', '25 Maiden Lane', '+353 1862 1555'),
(71, 'Auto-Moto Classics Inc.', 'Brickhaven, MA', '16780 Pompton St.', '6175558428'),
(72, 'UK Collectables, Ltd.', 'Liverpool, UK', '12, Berkeley Gardens Blvd', '(171) 555-2282'),
(73, 'Canadian Gift Exchange Network', 'Vancouver, Canada', '1900 Oak St.', '(604) 555-3392'),
(74, 'Online Mini Collectables', 'Brickhaven, MA', '7635 Spinnaker Dr.', '6175557555'),
(75, 'Toys4GrownUps.com', 'Pasadena, CA', '78934 Hillside Dr.', '6265557265'),
(76, 'Asian Shopping Network, Co', 'Singapore, Singapore', 'Suntec Tower Three', '+612 9411 1555'),
(77, 'Mini Caravy', 'Strasbourg, France', '24, place Kléber', '88.60.1555'),
(78, 'King Kong Collectables, Co.', 'Central Hong Kong, Hong Kong', 'Bank of China Tower', '+852 2251 1555'),
(79, 'Enaco Distributors', 'Barcelona, Spain', 'Rambla de Cataluña, 23', '(93) 203 4555'),
(80, 'Boards & Toys Co.', 'Glendale, CA', '4097 Douglas Av.', '3105552373'),
(81, 'Natürlich Autos', 'Cunewalde, Germany', 'Taucherstraße 10', '0372-555188'),
(82, 'Heintze Collectables', 'Århus, Denmark', 'Smagsloget 45', '86 21 3555'),
(83, 'Québec Home Shopping Network', 'Montréal, Canada', '43 rue St. Laurent', '(514) 555-8054'),
(84, 'ANG Resellers', 'Madrid, Spain', 'Gran Vía, 1', '(91) 745 6555'),
(85, 'Collectable Mini Designs Co.', 'San Diego, CA', '361 Furth Circle', '7605558146'),
(86, 'giftsbymail.co.uk', 'Cowes, UK', 'Garden House', '(198) 555-8888'),
(87, 'Alpha Cognac', 'Toulouse, France', '1 rue Alsace-Lorraine', '61.77.6555'),
(88, 'Messner Shopping Network', 'Frankfurt, Germany', 'Magazinweg 7', '069-0555984'),
(89, 'Amica Models & Co.', 'Torino, Italy', 'Via Monte Bianco 34', '011-4988555'),
(90, 'Lyon Souveniers', 'Paris, France', '27 rue du Colonel Pierre Avia', '+33 1 46 62 7555'),
(91, 'Auto Associés & Cie.', 'Versailles, France', '67, avenue de l\'Europe', '30.59.8555'),
(92, 'Toms Spezialitäten, Ltd', 'Köln, Germany', 'Mehrheimerstr. 369', '0221-5554327'),
(93, 'Royal Canadian Collectables, Ltd.', 'Tsawassen, Canada', '23 Tsawassen Blvd.', '(604) 555-4555'),
(94, 'Franken Gifts, Co', 'München, Germany', 'Berliner Platz 43', '089-0877555'),
(95, 'Anna\'s Decorations, Ltd', 'North Sydney, Australia', '201 Miller Street', '02 9936 8555'),
(96, 'Rovelli Gifts', 'Bergamo, Italy', 'Via Ludovico il Moro 22', '035-640555'),
(97, 'Souveniers And Things Co.', 'Chatswood, Australia', 'Monitor Money Building', '+61 2 9495 8555'),
(98, 'Marta\'s Replicas Co.', 'Cambridge, MA', '39323 Spinnaker Dr.', '6175558555'),
(99, 'BG&E Collectables', 'Fribourg, Switzerland', 'Rte des Arsenaux 41 ', '+41 26 425 50 01'),
(100, 'Vida Sport, Ltd', 'Genève, Switzerland', 'Grenzacherweg 237', '0897-034555'),
(101, 'Norway Gifts By Mail, Co.', 'Oslo, Norway  ', 'Drammensveien 126A', '+47 2212 1555'),
(102, 'Schuyler Imports', 'Amsterdam, Netherlands', 'Kingsfordweg 151', '+31 20 491 9555'),
(103, 'Der Hund Imports', 'Berlin, Germany', 'Obere Str. 57', '030-0074555'),
(104, 'Oulu Toy Supplies, Inc.', 'Oulu, Finland', 'Torikatu 38', '981-443655'),
(105, 'Petit Auto', 'Bruxelles, Belgium', 'Rue Joseph-Bens 532', '(02) 5554 67'),
(106, 'Mini Classics', 'White Plains, NY', '3758 North Pendale Street', '9145554562'),
(107, 'Mini Creations Ltd.', 'New Bedford, MA', '4575 Hillside Dr.', '5085559555'),
(108, 'Corporate Gift Ideas Co.', 'San Francisco, CA', '7734 Strong St.', '6505551386'),
(109, 'Down Under Souveniers, Inc', 'Auckland  , New Zealand', '162-164 Grafton Road', '+64 9 312 5555'),
(110, 'Stylish Desk Decors, Co.', 'London, UK', '35 King George', '(171) 555-0297'),
(111, 'Tekni Collectables Inc.', 'Newark, NJ', '7476 Moss Rd.', '2015559350'),
(112, 'Australian Gift Network, Co', 'South Brisbane, Australia', '31 Duncan St. West End', '61-7-3844-6555'),
(113, 'Suominen Souveniers', 'Espoo, Finland', 'Software Engineering Center', '+358 9 8045 555'),
(114, 'Cramer Spezialitäten, Ltd', 'Brandenburg, Germany', 'Maubelstr. 90', '0555-09555'),
(115, 'Classic Gift Ideas, Inc', 'Philadelphia, PA', '782 First Street', '2155554695'),
(116, 'CAF Imports', 'Madrid, Spain', 'Merchants House', '+34 913 728 555'),
(117, 'Men \'R\' US Retailers, Ltd.', 'Los Angeles, CA', '6047 Douglas Av.', '2155554369'),
(118, 'Asian Treasures, Inc.', 'Cork, Ireland', '8 Johnstown Road', '2967 555'),
(119, 'Marseille Mini Autos', 'Marseille, France', '12, rue des Bouchers', '91.24.4555'),
(120, 'Reims Collectables', 'Reims, France', '59 rue de l\'Abbaye', '26.47.1555'),
(121, 'SAR Distributors, Co', 'Hatfield, South Africa', '1250 Pretorius Street', '+27 21 550 3555'),
(122, 'GiftsForHim.com', 'Auckland, New Zealand', '199 Great North Road', '64-9-3763555'),
(123, 'Kommission Auto', 'Münster, Germany', 'Luisenstr. 48', '0251-555259'),
(124, 'Gifts4AllAges.com', 'Boston, MA', '8616 Spinnaker Dr.', '6175559555'),
(125, 'Online Diecast Creations Co.', 'Nashua, NH', '2304 Long Airport Avenue', '6035558647'),
(126, 'Lisboa Souveniers, Inc', 'Lisboa, Portugal', 'Jardim das rosas n. 32', '(1) 354-2555'),
(127, 'Precious Collectables', 'Bern, Switzerland', 'Hauptstr. 29', '0452-076555'),
(128, 'Collectables For Less Inc.', 'Brickhaven, MA', '7825 Douglas Av.', '6175558555'),
(129, 'Royale Belge', 'Charleroi, Belgium', 'Boulevard Tirou, 255', '(071) 23 67 2555'),
(130, 'Salzburg Collectables', 'Salzburg, Austria', 'Geislweg 14', '6562-9555'),
(131, 'Cruz & Sons Co.', 'Makati City, Philippines', '15 McCallum Street', '+63 2 555 3587'),
(132, 'L\'ordine Souveniers', 'Reggio Emilia, Italy', 'Strada Provinciale 124', '0522-556555'),
(133, 'Tokyo Collectables, Ltd', 'Minato-ku, Japan', '2-2-8 Roppongi', '+81 3 3584 0555'),
(134, 'Auto Canal+ Petit', 'Paris, France', '25, rue Lauriston', '(1) 47.55.6555'),
(135, 'Stuttgart Collectable Exchange', 'Stuttgart, Germany', 'Adenauerallee 900', '0711-555361'),
(136, 'Extreme Desk Decorations, Ltd', 'Wellington, New Zealand', '101 Lambton Quay', '04 499 9555'),
(137, 'Bavarian Collectables Imports, Co.', 'Munich, Germany', 'Hansastr. 15', ' +49 89 61 08 9555'),
(138, 'Classic Legends Inc.', 'NYC, NY', '5905 Pompton St.', '2125558493'),
(139, 'Feuer Online Stores, Inc', 'Leipzig, Germany', 'Heerstr. 22', '0342-555176'),
(140, 'Gift Ideas Corp.', 'Glendale, CT', '2440 Pompton St.', '2035554407'),
(141, 'Scandinavian Gift Ideas', 'Bräcke, Sweden', 'Åkergatan 24', '0695-34 6555'),
(142, 'The Sharp Gifts Warehouse', 'San Jose, CA', '3086 Ingle Ln.', '4085553659'),
(143, 'Mini Auto Werke', 'Graz, Austria', 'Kirchgasse 6', '7675-3555'),
(144, 'Super Scale Inc.', 'New Haven, CT', '567 North Pendale Street', '2035559545'),
(145, 'Microscale Inc.', 'NYC, NY', '5290 North Pendale Street', '2125551957'),
(146, 'Corrida Auto Replicas, Ltd', 'Madrid, Spain', 'C/ Araquil, 67', '(91) 555 22 82'),
(147, 'Warburg Exchange', 'Aachen, Germany', 'Walserweg 21', '0241-039123'),
(148, 'FunGiftIdeas.com', 'New Bedford, MA', '1785 First Street', '5085552555'),
(149, 'Anton Designs, Ltd.', 'Madrid, Spain', 'c/ Gobelas, 19-1 Urb. La Florida', '+34 913 728555'),
(150, 'Australian Collectables, Ltd', 'Glen Waverly, Australia', '7 Allen Street', '61-9-3844-6555'),
(151, 'Frau da Collezione', 'Milan, Italy', '20093 Cologno Monzese', '+39 022515555'),
(152, 'West Coast Collectables Co.', 'Burbank, CA', '3675 Furth Circle', '3105553722'),
(153, 'Mit Vergnügen & Co.', 'Mannheim, Germany', 'Forsterstr. 57', '0621-08555'),
(154, 'Kremlin Collectables, Co.', 'Saint Petersburg, Russia', '2 Pobedy Square', '+7 812 293 0521'),
(155, 'Raanan Stores, Inc', 'Herzlia, Israel', '3 Hagalim Blv.', '+ 972 9 959 8555'),
(156, 'Iberia Gift Imports, Corp.', 'Sevilla, Spain', 'C/ Romero, 33', '(95) 555 82 82'),
(157, 'Motor Mint Distributors Inc.', 'Philadelphia, PA', '11328 Douglas Av.', '2155559857'),
(158, 'Signal Collectibles Ltd.', 'Brisbane, CA', '2793 Furth Circle', '4155554312'),
(159, 'Double Decker Gift Stores, Ltd', 'London, UK', '120 Hanover Sq.', '(171) 555-7555'),
(160, 'Diecast Collectables', 'Boston, MA', '6251 Ingle Ln.', '6175552555'),
(161, 'Kelly\'s Gift Shop', 'Auckland  , New Zealand', 'Arenales 1938 3\'A\'', '+64 9 5555500');

-- --------------------------------------------------------

--
-- Table structure for table `parts`
--

CREATE TABLE `parts` (
  `number` int(11) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `price` float(8,2) DEFAULT NULL,
  `weight` float(4,2) NOT NULL DEFAULT 2.00,
  `pictureURL` varchar(50) NOT NULL DEFAULT 'http://blitz.cs.niu.edu/pics/any.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `parts`
--

INSERT INTO `parts` (`number`, `description`, `price`, `weight`, `pictureURL`) VALUES
(1, 'windshield w/ polymer', 178.76, 0.55, 'http://blitz.cs.niu.edu/pics/shi.jpg'),
(2, 'wiper blade pair', 23.37, 2.50, 'http://blitz.cs.niu.edu/pics/wip.jpg'),
(3, 'solenoid', 36.58, 2.00, 'http://blitz.cs.niu.edu/pics/sol.jpg'),
(4, 'tiresome mettle', 157.46, 2.00, 'http://blitz.cs.niu.edu/pics/met.jpg'),
(5, 'bucket seat pair', 315.94, 3.50, 'http://blitz.cs.niu.edu/pics/sea.jpg'),
(6, '5 point harness', 177.79, 12.45, 'http://blitz.cs.niu.edu/pics/har.jpg'),
(7, 'turbo intake valve', 659.83, 2.00, 'http://blitz.cs.niu.edu/pics/val.jpg'),
(8, 'supercharger', 711.14, 99.99, 'http://blitz.cs.niu.edu/pics/anc.jpg'),
(9, 'inter cooler sweep', 202.17, 2.00, 'http://blitz.cs.niu.edu/pics/int.jpg'),
(10, 'gas cap - chrome', 25.38, 2.00, 'http://blitz.cs.niu.edu/pics/gas.jpg'),
(11, 'chrome brake pedals kit-manual', 45.71, 0.55, 'http://blitz.cs.niu.edu/pics/bra.jpg'),
(12, 'chrome brake pedals kit-automatic', 41.65, 1.95, 'http://blitz.cs.niu.edu/pics/bra.jpg'),
(13, 'intel inside window decal', 2.03, 2.00, 'http://blitz.cs.niu.edu/pics/itl.jpg'),
(14, 'niu alumni window decal', 1.85, 2.00, 'http://blitz.cs.niu.edu/pics/niu.jpg'),
(15, 'air freshener - lemon', 1.85, 3.50, 'http://blitz.cs.niu.edu/pics/lem.jpg'),
(16, 'air freshener - cherry', 1.85, 12.45, 'http://blitz.cs.niu.edu/pics/che.jpg'),
(17, 'air freshener - new car smell', 2.06, 2.00, 'http://blitz.cs.niu.edu/pics/usa.jpg'),
(18, 'cargo net (new model)', 25.36, 2.00, 'http://blitz.cs.niu.edu/pics/net.jpg'),
(19, 'trunk liner', 25.38, 2.00, 'http://blitz.cs.niu.edu/pics/tru.jpg'),
(20, 'floor mat - driver side', 13.21, 2.00, 'http://blitz.cs.niu.edu/pics/mat.jpg'),
(21, 'floor mat - passenger side', 13.21, 0.55, 'http://blitz.cs.niu.edu/pics/mat.jpg'),
(22, 'car detail kit', 88.38, 1.95, 'http://blitz.cs.niu.edu/pics/cdk.jpg'),
(23, 'tachometer', 30.48, 2.00, 'http://blitz.cs.niu.edu/pics/tach.jpg'),
(24, 'speedometer mph edition', 34.55, 2.00, 'http://blitz.cs.niu.edu/pics/spe.jpg'),
(25, 'gps navigation', 152.39, 3.50, 'http://blitz.cs.niu.edu/pics/gps.jpg'),
(26, 'CD/DVD/DB holder', 20.31, 0.50, 'http://blitz.cs.niu.edu/pics/dvd.jpg'),
(27, 'car charger - micro usb, 2 ft', 17.26, 2.00, 'http://blitz.cs.niu.edu/pics/cha.jpg'),
(28, 'Backup camera peephole', 10.12, 2.00, 'http://blitz.cs.niu.edu/pics/bac.jpg'),
(30, 'USB car adapter, NaviPro 2.1', 220.45, 2.00, 'http://blitz.cs.niu.edu/pics/usb.jpg'),
(31, 'Reverse Sensor, mitigatable', 50.75, 0.55, 'http://blitz.cs.niu.edu/pics/tac.jpg'),
(33, 'Modern Part: 24-11-12 16:54', 101.58, 99.99, 'http://blitz.cs.niu.edu/pics/033-2.jpg'),
(40, '1969 Harley Davidson Ultimate Chopper', 49.59, 2.00, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(41, '1952 Alpine Renault 1300', 100.16, 0.55, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(42, '1996 Moto Guzzi 1100i', 70.08, 1.95, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(43, '2003 Harley-Davidson Eagle Drag Bike', 92.47, 2.00, 'http://blitz.cs.niu.edu/pics/any.jpg'),
(44, '1972 Alfa Romeo GTA', 87.06, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(45, '1962 LanciaA Delta 16V', 105.05, 3.50, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(46, '1968 Ford Mustang', 96.84, 12.45, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(47, '2001 Ferrari Enzo', 97.11, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(48, '1958 Setra Bus', 79.14, 2.00, 'http://blitz.cs.niu.edu/pics/bus.jpg'),
(49, '2002 Suzuki XERO', 67.32, 2.00, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(50, '1969 Corvair Monza', 90.55, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(51, '1968 Dodge Charger', 76.36, 99.99, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(52, '1969 Ford Falcon', 84.38, 1.95, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(53, '1970 Plymouth Hemi Cuda', 32.42, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(54, '1957 Chevy Pickup', 56.59, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(55, '1969 Dodge Charger', 59.66, 3.50, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(56, '1940 Ford Pickup Truck', 59.25, 12.45, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(57, '1993 Mazda RX-7', 84.84, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(58, '1937 Lincoln Berline', 61.58, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(59, '1936 Mercedes-Benz 500K Special Roadster', 24.64, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(60, '1965 Aston Martin DB5', 67.01, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(61, '1980s Black Hawk Helicopter', 78.50, 0.55, 'http://blitz.cs.niu.edu/pics/heli.jpg'),
(62, '1917 Grand Touring Sedan', 88.07, 1.95, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(63, '1948 Porsche 356-A Roadster', 54.77, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(64, '1995 Honda Civic', 95.39, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(65, '1998 Chrysler Plymouth Prowler', 103.14, 3.50, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(66, '1911 Ford Town Car', 33.83, 12.45, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(67, '1964 Mercedes Tour Bus', 76.06, 2.00, 'http://blitz.cs.niu.edu/pics/bus.jpg'),
(68, '1932 Model A Ford J-Coupe', 59.42, 2.00, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(69, '1926 Ford Fire Engine', 25.32, 2.00, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(70, 'P-51-D Mustang', 49.77, 2.00, 'http://blitz.cs.niu.edu/pics/air.jpg'),
(71, '1936 Harley Davidson El Knucklehead', 24.62, 0.55, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(72, '1928 Mercedes-Benz SSK', 73.72, 1.95, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(73, '1999 Indy 500 Monte Carlo SS', 57.66, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(74, '1913 Ford Model T Speedster', 61.75, 2.00, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(75, '1934 Ford V8 Coupe', 34.89, 3.50, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(76, '1999 Yamaha Speed Boat', 52.43, 12.45, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(77, '18th Century Vintage Horse Carriage', 61.68, 2.00, 'http://blitz.cs.niu.edu/pics/horse.jpg'),
(78, '1903 Ford Model A', 69.39, 2.00, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(79, '1992 Ferrari 360 Spider red', 79.14, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(80, '1985 Toyota Supra', 57.91, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(81, 'Collectable Wooden Train', 68.65, 0.55, 'http://blitz.cs.niu.edu/pics/train.jpg'),
(82, '1969 Dodge Super Bee', 49.82, 1.95, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(83, '1917 Maxwell Touring Car', 58.44, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(84, '1976 Ford Gran Torino', 74.67, 2.00, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(85, '1948 Porsche Type 356 Roadster', 63.16, 3.50, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(86, '1957 Vespa GS150', 33.48, 12.45, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(87, '1941 Chevrolet Special Deluxe Cabriolet', 65.61, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(88, '1970 Triumph Spitfire', 93.39, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(89, '1932 Alfa Romeo 8C2300 Spider Sport', 43.96, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(90, '1904 Buick Runabout', 53.50, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(91, '1940s Ford truck', 86.11, 0.55, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(92, '1939 Cadillac Limousine', 23.51, 1.95, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(93, '1957 Corvette Convertible', 71.04, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(94, '1957 Ford Thunderbird', 34.75, 2.00, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(95, '1970 Chevy Chevelle SS 454', 50.02, 3.50, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(96, '1970 Dodge Coronet', 32.89, 12.45, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(97, '1997 BMW R 1100 S', 61.83, 2.00, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(98, '1966 Shelby Cobra 427 S/C', 29.64, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(99, '1928 British Royal Navy Airplane', 67.80, 2.00, 'http://blitz.cs.niu.edu/pics/air.jpg'),
(100, '1939 Chevrolet Deluxe Coupe', 22.92, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(101, '1960 BSA Gold Star DBD34', 37.91, 0.55, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(102, '18th century schooner', 83.65, 1.95, 'http://blitz.cs.niu.edu/pics/ship.jpg'),
(103, '1938 Cadillac V-16 Presidential Limousine', 20.94, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(104, '1962 Volkswagen Microbus', 62.31, 2.00, 'http://blitz.cs.niu.edu/pics/bus.jpg'),
(105, '1982 Ducati 900 Monster', 47.85, 3.50, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(106, '1949 Jaguar XK 120', 48.00, 12.45, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(107, '1958 Chevy Corvette Limited Edition', 16.16, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(108, '1900s Vintage Bi-Plane', 34.78, 2.00, 'http://blitz.cs.niu.edu/pics/any.jpg'),
(109, '1952 Citroen-15CV', 73.98, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(110, '1982 Lamborghini Diablo', 16.50, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(111, '1912 Ford Model T Delivery Wagon', 47.65, 0.55, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(112, '1969 Chevrolet Camaro Z28', 51.31, 1.95, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(113, '1971 Alpine Renault 1600s', 39.19, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(114, '1937 Horch 930V Limousine', 26.71, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(115, '2002 Chevy Corvette', 63.10, 3.50, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(116, '1940 Ford Delivery Sedan', 49.41, 12.45, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(117, '1956 Porsche 356A Coupe', 99.87, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(118, 'Corsair F4U ( Bird Cage)', 29.80, 2.00, 'http://blitz.cs.niu.edu/pics/cor.jpg'),
(119, '1936 Mercedes Benz 500k Roadster', 22.11, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(120, '1992 Porsche Cayenne Turbo Silver', 70.89, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(121, '1936 Chrysler Airflow', 58.39, 0.55, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(122, '1900s Vintage Tri-Plane', 36.80, 1.95, 'http://blitz.cs.niu.edu/pics/any.jpg'),
(123, '1961 Chevrolet Impala', 32.83, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(124, '1980 GM Manhattan Express', 60.70, 2.00, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(125, '1997 BMW F650 ST', 75.34, 3.50, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(126, '1982 Ducati 996 R', 27.17, 12.45, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(127, '1954 Greyhound Scenicruiser', 29.24, 2.00, 'http://blitz.cs.niu.edu/pics/bus.jpg'),
(128, '1950 Chicago Surface Lines Streetcar', 30.08, 2.00, 'http://blitz.cs.niu.edu/pics/scar.jpg'),
(129, '1996 Peterbilt 379 Stake Bed with Outrigger', 37.83, 2.00, 'http://blitz.cs.niu.edu/pics/peter.jpg'),
(130, '1928 Ford Phaeton Deluxe', 37.17, 2.00, 'http://blitz.cs.niu.edu/pics/ford.jpg'),
(131, '1974 Ducati 350 Mk3 Desmo', 63.18, 0.55, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(132, '1930 Buick Marquette Phaeton', 30.47, 1.95, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(133, 'Diamond T620 Semi-Skirted Tanker', 76.87, 2.00, 'http://blitz.cs.niu.edu/pics/ship.jpg'),
(134, '1962 City of Detroit Streetcar', 42.20, 2.00, 'http://blitz.cs.niu.edu/pics/scar.jpg'),
(135, '2002 Yamaha YZR M1', 38.47, 3.50, 'http://blitz.cs.niu.edu/pics/mop.jpg'),
(136, 'The Schooner Bluenose', 38.28, 12.45, 'http://blitz.cs.niu.edu/pics/ship.jpg'),
(137, 'American Airlines: B767-300', 57.58, 2.00, 'http://blitz.cs.niu.edu/pics/air.jpg'),
(138, 'The Mayflower', 48.74, 2.00, 'http://blitz.cs.niu.edu/pics/ship.jpg'),
(139, 'HMS Bounty', 44.84, 2.00, 'http://blitz.cs.niu.edu/pics/ship.jpg'),
(140, 'America West Airlines B757-200', 77.44, 2.00, 'http://blitz.cs.niu.edu/pics/air.jpg'),
(141, 'The USS Constitution Ship', 38.25, 0.55, 'http://blitz.cs.niu.edu/pics/ship.jpg'),
(142, '1982 Camaro Z28', 52.38, 1.95, 'http://blitz.cs.niu.edu/pics/car.jpg'),
(143, 'ATA: B757-300', 66.78, 2.00, 'http://blitz.cs.niu.edu/pics/air.jpg'),
(144, 'F/A 18 Hornet 1/72', 61.24, 2.00, 'http://blitz.cs.niu.edu/pics/air.jpg'),
(145, 'The Titanic', 57.50, 3.50, 'http://blitz.cs.niu.edu/pics/ship.jpg'),
(146, 'The Queen Mary', 60.37, 12.45, 'http://blitz.cs.niu.edu/pics/ship.jpg'),
(147, 'American Airlines: MD-11S', 40.83, 2.00, 'http://blitz.cs.niu.edu/pics/air.jpg'),
(148, 'Boeing X-32A JSF', 36.90, 2.00, 'http://blitz.cs.niu.edu/pics/air.jpg'),
(149, 'Pont Yacht', 37.48, 2.00, 'http://blitz.cs.niu.edu/pics/ship.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parts`
--
ALTER TABLE `parts`
  ADD PRIMARY KEY (`number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;

--
-- AUTO_INCREMENT for table `parts`
--
ALTER TABLE `parts`
  MODIFY `number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
